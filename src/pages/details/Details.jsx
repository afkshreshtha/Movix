import React from 'react'
import { useParams } from 'react-router-dom'
import './Details.scss'

import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideoSections'
import Recommendation from './carousels/Recommenditation'
import Similar from './carousels/Similar'

const Details = () => {
  const { mediaType, id } = useParams()

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)

  const { data: n, loading: nl } = useFetch(`/${mediaType}/${id}`)

  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`,
  )
  const network = n?.networks?.map((n) => n?.id)

  const { data: networks, loading: networksLoading } = useFetch(
    `/network/${network}`,
  )
  const { data: networksimg, loading: networksLoadingimg } = useFetch(
    `/network/${network}/images`,
  )
  const networkimgs = networksimg?.logos?.[0].file_path
  console.log(networkimgs)

  return (
    <div>
      <DetailsBanner
        video={data?.results?.[0]}
        crew={credits?.crew}
        network={networks?.name}
        networkimg={networkimgs}
      />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Recommendation mediaType={mediaType} id={id}/>
      <Similar mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details
