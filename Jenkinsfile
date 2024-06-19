pipeline {
  environment {
    DOCKERHUB_CREDENTIALS = 'Jenkins_Dockerhub' // Assuming ID of credentials
  }
  agent any
  stages {
    stage('Construire l\'image Docker') { // Stage name in French
      steps {
        sh 'docker build -t demo1'  // Build the image with tag "demo1"
      }
    }
    stage('Marquer et diffuser l\'image Docker') { // Stage name in French
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: '$DOCKERHUB_CREDENTIALS', usernameVariable: 'DOCKERHUB_CREDENTIALS_USR', passwordVariable: 'DOCKERHUB_CREDENTIALS_PSW')]) {
            sh 'docker tag demo1 channoufi/demo1:latest'
            sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
            sh 'docker push channoufi/demo1:latest'
          }
        }
      }
    }
    stage('Exécuter le conteneur Docker') { // Stage name in French
      steps {
        script {
          sh 'docker run -d --name demo_container -p 8081:80 channoufi/demo1:latest'
        }
      }
    }
  }
}
