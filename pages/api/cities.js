import {
  useState
} from 'react'

function EndpointsPage() {
  const [cities, setCities] = useState([])

  const fetchCityList = async () => {
    const response = await fetch('/api/search')
    const data = await response.json()
    console.log(data)
    setBooks(data)
  }

  return(
    <>
    <div align="center">
      <button  onClick={fetchCityList}>Get the ID cities list </button>
     </div> {
      cities.map(city => {
        return (
          <div align="center" key={city.id}>
            {city.id}.<br/>
            {"City Name: "}{city.name}.<br/>
            {"State: "} {city.state}.<br/>
            {"Country: "}{city.country} <br/>
            <hr/>
          </div>
        )
      })
    }
     </>
  )
}

export default EndpointsPage;