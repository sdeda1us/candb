'use client'
import { useEffect, useState } from 'react'



const Farm = () => {
    const [fgMinors, setFgMinors] = useState();

    useEffect(() => {
        const fetchFangraphs = async () => {
            const res = await fetch('https://www.fangraphs.com/api/leaders/minor-league/data?pos=all&level=0&lg=all&stats=bat&qual=0&type=0&team=&season=2023&seasonEnd=2023&org=&ind=0&splitTeam=false')
            const data = await res.json()
            const data_vals = Object.values(data)
            setFgMinors(data)
            
        }
        fetchFangraphs();
    }, [])

  return (
    <div>
        <h1>Farm Teams</h1>
        <ul>
            {fgMinors? fgMinors.map((player) => (<li key={player.minormasterid}>{player.PlayerName}</li>)): <p>Loading</p>}
        </ul>
    </div>
  )
}

export default Farm