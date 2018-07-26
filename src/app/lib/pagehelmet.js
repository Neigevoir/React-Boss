import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { pure } from 'recompose'

const PageHelmet = ({ title, link }) => (
  <Helmet>
    <title>{title}</title>
    <link rel="canonical" href={`${link}`} />
  </Helmet>
)

PageHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default pure(PageHelmet)
