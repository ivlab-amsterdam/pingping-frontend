#!groovy

def tryStep(String message, Closure block, Closure tearDown = null) {
    try {
        block();
    }
    catch (Throwable t) {
        slackSend message: "${env.JOB_NAME}: ${message} failure ${env.BUILD_URL}", channel: '#ci-channel', color: 'danger'

        throw t;
    }
    finally {
        if (tearDown) {
            tearDown();
        }
    }
}


node {
    stage("Checkout") {
        checkout scm
    }

//    stage("Test") {
//        tryStep "test", {
//            sh "docker-compose -p pingping_frontend -f docker-compose.yml build && " +
//                    "docker-compose -p pingping_frontend -f docker-compose.yml run --rm test"
//       }
//    }


    stage("Build image") {
        tryStep "build", {
             sh "docker build -t build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER} " +
                "--shm-size 1G " +
                "--build-arg ENVIRONMENT=acceptance " +
                "."
             sh "docker push build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}"
                // def image = docker.build("build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}". "--build-arg ENVIRONMENT=acceptance .")
                // image.push()
        }
    }
}

String BRANCH = "${env.BRANCH_NAME}"

if (BRANCH == "master") {

    node {
        stage('Push acceptance image') {
            tryStep "image tagging", {
                    def image = docker.image("build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}")
                    image.pull()
                    image.push("acceptance")
            }
        }
    }

    node {
        stage("Deploy to ACC") {
            tryStep "deployment", {
                build job: 'Subtask_Openstack_Playbook',
                parameters: [
                    [$class: 'StringParameterValue', name: 'INVENTORY', value: 'acceptance'],
                    [$class: 'StringParameterValue', name: 'PLAYBOOK', value: 'deploy-pingping-frontend.yml'],
                ]
            }
        }
    }
}