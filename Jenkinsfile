pipeline {
    agent {
        label 'website'
    }
    
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') {
            steps {
                sh 'sudo chmod -R 777 ./jenkins/scripts/build.sh'
                sh 'sudo ./jenkins/scripts/build.sh'
            }
        }
        stage('Deliver') {
                            steps {
                                sh 'sudo chmod -R 777 ./jenkins/scripts/deliver.sh'
                                sh 'sudo ./jenkins/scripts/deliver.sh'
                                sh 'pm2 stop all'
                                sh 'pm2 delete all'
                                sh 'pm2 start npm --name paygo-website -- run start -- -p 3000'
                                sh 'pm2 startup'
                            }
                        }
                        stage('Test') {
                                    steps {
                                        sh 'sudo chmod -R 777 ./jenkins/scripts/test.sh'
                                        sh 'sudo ./jenkins/scripts/test.sh'
                                    }
                                }
                
    }
}
