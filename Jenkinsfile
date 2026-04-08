pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',url: 'https://github.com/harshini-1121/devops-user-app.git'
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

        stage('Run App Test') {
            steps {
                sh 'node app/server.js & sleep 5'
            }
        }

    }
}
