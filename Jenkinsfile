pipeline{
    environment{
        DOCKERHUB_CREDENTIALS=credential('Jenkins_Dockerhub')
                }
    agent any
    stages{
        stage('Build Docker Image'){
            steps{
                sh 'docker build -t demo1'
            }
        }
        stage('tag and put docker image'){
            steps{
             script{
                sh 'docker tag demo1 channoufi/demo1:latest'
                sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
                sh 'docker push channoufi/demo1:latest'
             }
            }
            post{
                always{
                    sh 'docker logout'
                }
            }
        }
        stage('Run Docker Container'){
            steps{
                script{
                    //run the container
                    sh'docker run -d --name demo_container -p 8081:80  channoufi/demo1:latest'
                }
            }
        }
    }        
}