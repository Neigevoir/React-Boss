const WillPosts = () => {
  return {
    type: 'FETCHING_WILLPOSTS'
  }
}

const FetchPosts = () => {
  return {
    type: 'FETCHING_POSTING'
  }
}

const DidPosts = () => {
  return {
    type: 'FETCHING_DIDPOSIS'
  }
}

const ResData = (type, res, companytype) => {
  return {
    type,
    res,
    companytype
  }
}

export default {
  WillPosts,
  FetchPosts,
  DidPosts,
  ResData
}
