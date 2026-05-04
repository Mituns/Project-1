pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Mituns/Mitun-Devops-.git'
            }
        }

        stage('Install') {
            steps {
                sh 'apt update && apt install -y nodejs npm'
            }
        }

        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
