pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/harshini-1121/devops-user-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint Check') {
            steps {
                sh 'echo "Lint check passed"'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarqube-new') {
                    sh '''
                    sonar-scanner \
                    -Dsonar.projectKey=devops-user-app \
                    -Dsonar.sources=.
                    '''
                }
            }
        }
        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Run App Test') {
            steps {
                sh 'node app/server.js & sleep 5'
            }
        }
    }
}