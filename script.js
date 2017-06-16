/*input text
output word count, unique word count and average word length

start event when submitted
create variables/function for 
    word count
    unique word count
    average word length

other stuff. get it into HTML
*/    

$(document).ready(function() {
    $('button[type=submit]').on('click', function(event) {
        
        //user text submitted
        let words = $('#user-text').val();
        
        
        //find word count
        let totalWords = words.split(' ').length;
       

        /*find unique word count
        let uniqueWords = words.split(' ');
        let uniqueWordsArr = JSON.parse("[" + string + "]");

        function findUniqueWords(arr, var) {
            for(let i = 0; i < arr.length) {
                if(a === b) {
                    arr.push([i]);
                }
            }
            alert(arr);
        }

        findUniqueWords(uniqueWords);*/

        //average word length
            //regex
            let charCountNoStrings = words.replace(/\s/g, '').length;
        let avgWordLength = charCountNoStrings/totalWords;
        

            //alerts for variables
        // alert(totalWords + ' num of words');
        // alert(charCountNoStrings + ' Char count');
        // alert(avgWordLength + ' avg  word length');


        //                  HTML SECTION

        //generate HTML

        //remove hidden class for results
        $('.hidden, .text-report').toggleClass('hidden');
            //prevents page from refreshing after hiding class
            event.preventDefault();


        $('.count').append(totalWords);
        // not done$('.count').append(totalWords);
        $('.length').append(avgWordLength);

    //end bracket for button submit
    })
//end bracket for document ready
});