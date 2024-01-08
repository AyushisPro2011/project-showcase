import { useState } from "react"
import Navbar from "../../components/navbar"
import './Quotes.css'

const Quotes = () =>{
    const Quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The best way to predict the future is to invent it. - Alan Kay",
        "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
        "Strive not to be a success, but rather to be of value. - Albert Einstein",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
        "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
        "It is never too late to be what you might have been. - George Eliot",
        "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
        "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
        "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
        "Success is not in what you have, but who you are. - Bo Bennett",
        "Opportunities don't happen, you create them. - Chris Grosser",
        "Either you run the day, or the day runs you. - Jim Rohn",
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "The best revenge is massive success. - Frank Sinatra",
        "The secret of success is to do the common thing uncommonly well. - John D. Rockefeller Jr.",
        "If you really want to do something, you'll find a way. If you don't, you'll find an excuse. - Jim Rohn",
        "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
        "Success is not just about making money. It's about making a difference. - Unknown",
        "The only person you should try to be better than is the person you were yesterday. - Unknown",
        "Dream big and dare to fail. - Norman Vaughan",
        "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
        "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
        "The harder you work, the luckier you get. - Gary Player",
        "You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
        "The man who moves a mountain begins by carrying away small stones. - Confucius",
        "A year from now you may wish you had started today. - Karen Lamb",
        "The best way to predict your future is to create it. - Peter Drucker",
        "Don’t count the days, make the days count. - Muhammad Ali",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
        "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
        "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
        "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
        "Failure is the condiment that gives success its flavor. - Truman Capote",
        "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
        "Success is not about being the best. It's about always getting better. - Behance",
        "Don't wait. The time will never be just right. - Napoleon Hill",
        "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
        "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar",
        "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
        "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
        "Success is not in what you have, but who you are. - Bo Bennett",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt",
        "The starting point of all achievement is desire. - Napoleon Hill"
      ];
    const [quote , setquote] = useState()
    const [author , setauthor] = useState()




    const givequote = (num) =>{
        const task = Quotes[num]
        const output =  task.split("-")
        setquote(output[0])
        setauthor(output[1])
        
    }
    const copy = () =>{
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            // Behavior for mobile devices
            const text = quote + "-" +author;
    const hiddenInput = document.getElementById("hiddenInput");

    hiddenInput.value = text;
    hiddenInput.focus();
    hiddenInput.select();

    try {
      const successful = document.execCommand('copy');
      const message = successful ? 'Quote copied!' : 'Copying failed.';
      alert(message);
    } catch (err) {
      console.error('Unable to copy: ', err);
      alert("Copying failed. Please try again.");
    }
    } else {
        navigator.clipboard.writeText(quote + "-" + author)
        alert("computer")
    }   
  
    }
    
    
    
    return(
        <div id = "Quotes-main">
            <Navbar Text={"Quotes Generator"}/>
            <input type="text" id="hiddenInput" style={{position: "absolute", left: "-9999px", opacity: 0,}}/>
            <div id="Quotes-grad">
            <div id="Quotes-box">
                <p id="Quotes-Quote">{quote}</p>
                <p id="Quotes-Author">-{author}</p>
                <button onClick={() =>  givequote(Math.floor(Math.random() * Quotes.length))} id="Quotes-gen">Get Quote</button>
                <button onClick={() => copy()} id="Quotes-copy">Copy to Clipboard</button>
            </div>
            </div>
        </div>
    )
}
export default Quotes