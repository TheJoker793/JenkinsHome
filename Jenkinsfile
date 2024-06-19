pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = 'Jenkins_Dockerhub' // En supposant l'ID des informations d'identification
    }
    agent any
    stages {
        stage('Construire l'image Docker') {
            steps {
                sh 'docker build -t demo1'
            }
        }
        stage('Marquer et diffuser l'image Docker') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: '$DOCKERHUB_CREDENTIALS', usernameVariable: 'DOCKERHUB_CREDENTIALS_USR', passwordVariable: 'DOCKERHUB_CREDENTIALS_PSW')]) {
                        sh 'docker tag demo1 channoufi/demo1:latest'
                        sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
                        sh 'docker push channoufi/demo1:latest'
                    }
                }
            }
            post {
                always {
                    sh 'docker logout'
                }
            }
        }
        stage('Exécuter le conteneur Docker') {
            steps {
                script {
                    sh 'docker run -d --name demo_container -p 8081:80 channoufi/demo1:latest'
                }
            }
        }
    }
}
