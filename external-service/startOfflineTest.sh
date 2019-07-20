TMPFILE=offline$$.log
TMPDynamoFILE=dynamo$$.log

if [ -f .offline.pid ]; then
    echo "Found file .offline.pid. Not starting."
    exit 1
fi

sls dynamodb start -s test --migate &> $TMPDynamoFILE &

while ! grep "Dynamodb Local Started" $TMPDynamoFILE
do sleep 1; done

while ! grep "Serverless: DynamoDB - created table" $TMPDynamoFILE
do sleep 1; done

serverless offline -s test &> $TMPFILE &
PID=$!
echo $PID > .offline.pid

while ! grep "Serverless: Starting Offline" $TMPFILE
do sleep 1; done

rm $TMPFILE
rm $TMPDynamoFILE
