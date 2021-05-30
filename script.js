var request = new XMLHttpRequest();
request.open('GET','https:/newaccount1622276267708.freshdesk.com/HHLpdlvxcWbnutUrguFB/v2/resource_name', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    var desk = data.filter((items) => {

        console.log(items.status)

    });



}
curl -v -u yourapikey:X -H "Content-Type: application/json" -d '{ "description": "Details about the issue...", "subject": "Support Needed...", "email": "tom@outerspace.com", "priority": 1, "status": 2, "cc_emails": ["ram@freshdesk.com","diana@freshdesk.com"] }' -X POST 'https://newaccount1622276267708.freshdesk.com/HHLpdlvxcWbnutUrguFB/v2/tickets'
