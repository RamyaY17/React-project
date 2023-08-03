import './moose.css'

export default function moose(){
    return(
    <div class="moose">
    <h1>SARAH'S FAVORITE ANIMAL WITH THE LIST AND TABLE.</h1>
        <table>
            <tr>
                <th>HOME</th>
                <th>FUN FACTS</th>
            </tr>
            <tr>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpHAzOJ5e-4m9IXiE8nCnh3C4v5GxfbyJOQ&usqp=CAU" alt=" " height="200"></img></td>
            <td><p>Her name is Sarah, and her favourite animal is the moose.<br></br>They can be up to 6.5 feet tall 
            and weigh 1200 pounds.<br></br>Surprisingly, they're good at swimming!<br></br>If you want to learn more about the moose, 
            check out <a href="https://en.wikipedia.org/wiki/Moose">its <br></br>Wikipedia page.</a></p></td></tr>
        </table>
         <h2>MOOSE ARE AWESOME ANIMAL BECAUSE...</h2>
         <ol type="1" id="hello">
            <li>They can swim really well</li>
            <li>They can make really funny noises</li>
            <li>They can close their nostrils</li>
         </ol>
         <h2>If I WERE A MOOSE,I WOULD...</h2>
         <ul id="hello">
            <li>Eat lots of lettuce</li>
            <li>Carry little animals on my antlers</li>
            <li>Swim to Alaska</li>
        </ul>
        <h2>MOOSE VIDEO:</h2>
        <iframe width="650" height="315" src="https://www.youtube.com/embed/9MUCQwW2W7k"
          frameborder="0" id = "hello" title ="youtube moose video" allow=" autoplay;encrypted-media;" allowfullscreen>    
        </iframe>
        </div>
     );
}