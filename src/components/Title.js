import React from 'react'

const Title = () => {
    console.log("rendering title")
  return (
    <div>
        useCallBack hook
    </div>
  )
}

// export default Title
export default React.memo(Title)