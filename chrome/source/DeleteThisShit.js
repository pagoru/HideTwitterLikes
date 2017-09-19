/**
 * Created by Pablo on 19 Sep 17.
 */

function delete_suggest_activity_tweets(){
    Array.from( document.getElementsByClassName("tweet") ).forEach(function (t) {
        var b = t.getAttribute("data-component-context");
    if(b === "suggest_activity_tweet"){
        t.remove();
    }
});
}

setTimeout(function () {
    delete_suggest_activity_tweets();
}, 1000);