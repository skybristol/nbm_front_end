def CMD = "rsync -ur --verbose --exclude '.git' --exclude 'Jenkinsfile'"
def CSAHC_PATH = "igscsahcgw.cr.usgs.gov:/mnt/dist/websites/biogeography/"

def envMap = [
"develop": "beta/",
"master": "prod/"
]

node {
    checkout scm

    stage('rsync nbm-front-end') {
        echo "Copying updated files from $branch"

        switch (branch) {
            case ["develop", "master"]:
                CSAHC_PATH += envMap[branch]
                // -O here omits sending directory times 
                sh("${CMD} . ${CSAHC_PATH}")
                break
            default:
                echo "No branch specifed"
        } 
    }
}
