import React from 'react'

import Facebook from 'components/icons/Facebook'
import Twitter from 'components/icons/Twitter'
import Instagram from 'components/icons/Instagram'
import Medium from 'components/icons/Medium'
import YouTube from 'components/icons/YouTube'
import Globe from 'components/icons/Globe'

const networks = [
  {
    value: 'facebook',
    name: 'Facebook',
    icon: <Facebook />
  },
  {
    value: 'twitter',
    name: 'Twitter',
    icon: <Twitter />
  },
  {
    value: 'instagram',
    name: 'Instagram',
    icon: <Instagram />
  },
  {
    value: 'medium',
    name: 'Medium',
    icon: <Medium />
  },
  {
    value: 'youtube',
    name: 'YouTube',
    icon: <YouTube />
  },
  {
    value: 'otherMedia',
    name: 'Other',
    icon: <Globe />
  }
]

export default networks
