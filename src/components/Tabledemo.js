import './Tabledemo.css'

export default function Tabledemo(){
    return(
        <div className = "Table">
        <table>
        <tr>
            <th >TEAMS</th>
            <th>CITY</th>
            <th>HOME GROUND</th>
            <th>DEBUT</th>
            <th>OWNER</th>
        </tr>
        <tr>
            <td>Chennai Super Kings</td>
            <td>Chennai,Tamilnadu</td>
            <td>M.A.chidambaram Stadium</td>
            <td>2008</td>
            <td>
                <ul>
                <li>N Srinivasan</li>
                </ul></td>
        </tr>
        <tr>
            <td>Delhi Capitals</td>
            <td>New Delhi,Delhi</td>
            <td>Arun Jaitley Stadium</td>
            <td>2009</td>
            <td>
                <ul>
                    <li>Sajjan Jindal</li>
                    <li>G.M.Rao</li>
                </ul></td>
        </tr>
        <tr>
            <td>Gujarat Titans</td>
            <td>Ahemedabad,Gujarat</td>
            <td>Narendra Modi Stadium</td>
            <td>2022</td>
            <td>
                <ul>
                <li>Steve Koltes</li>
                <li>Juhi chawla</li>
                <li>Jay Mehta</li>
                </ul></td>
        </tr>
        <tr>
            <td>Kolkata Knight Riders</td>
            <td>Kolkata,West Bengal</td>
            <td>Eden Gardens</td>
            <td>2008</td>
            <td>
                <ul>
                <li>Shah Rukh Khan</li>
                <li>Juhi Chawla</li>
                <li>Jay Mehta</li>
                </ul></td>
        </tr>
        <tr>
            <td>Lucknow Super Giants</td>
            <td>Lucknow,Uttar Pradesh</td>
            <td>BRSABV Ekana Cricket Stadium</td>
            <td>2022</td>
            <td>
                <ul>
                <li>Sanjiv Goenkar</li>
                </ul></td>
        </tr>

    </table>
        </div>
    );
}