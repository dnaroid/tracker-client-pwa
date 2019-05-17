import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ROUTE } from '../config/strings'

export default connect()(() => {

  useEffect(() => {
    //syncTracks()
  }, [])

  return (
    <div>
      <a href={ROUTE.Track}>
        + ADD TRACK
      </a>
      {Object.values([{/*tracks*/ }]).map(t =>
        <div key={t.number}>
          {t.number}
        </div>
      )}
    </div>
  )

})
