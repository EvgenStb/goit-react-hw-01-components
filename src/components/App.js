import Profile from "./Profile/Profile";
import user from "./json/user.json"
import Statistic from "./Statistics/Statistics";
import data from "./json/data.json"

// const user = user[0]

export default function App (){
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistic
      title = "UPLOAD STATS"
      data = {data}
      />
    </div>
    
      
    
    
  )
}











