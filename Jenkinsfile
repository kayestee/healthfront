pipeline {
  agent {
    label 'jenkinslave'
  }
  tools {nodejs "NodeJS"}

  environment {
    AWS_ECR_REGION = 'us-east-2'
    AWS_ECR_URL = 'https://097816535043.dkr.ecr.us-east-2.amazonaws.com'
    AWS_ECR_CRED = 'ecr:us-east-2:5dd9b7e7-63e3-477f-9ad2-18bd9baa8dec' 
 }
  stages {
    stage('Build') {
      steps {
	
	script {
		docker.withRegistry("${env.AWS_ECR_URL}","${env.AWS_ECR_CRED}"){
			def app = docker.build("healthfront:healthfront_${env.BUILD_NUMBER}")
			app.push("healthfront_${env.BUILD_NUMBER}")
		}
	}
    	}
    }
  }
  
}
	
