import '../App.css'

const Sidebar = ({ handleButtonClick }) => {
    const planetOptions = ['Moon' , 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto' , 'Eris' , 'Haumea' , 'MakeMake' , 'Ceres' , 'Ganymede-Jupiter' , 'Titan-Saturn' , 'Callisto-Jupiter' , "Io-Jupiter" , 'Europa-Jupiter'];
  
    return (
      <div className='sidebar'>
        {planetOptions.map((option) => (
          <button value={option} onClick={() => handleButtonClick(option)} id = {option} style={{cursor : "pointer"}}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  };
export default Sidebar;