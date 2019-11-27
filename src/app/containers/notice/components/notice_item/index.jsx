export default function NoticeItem(props) {
  if (_.isEmpty(props.data)) {
    return null
  }
  const { message, title } = props.data

  return (
    <li className="noticeContent">
      <div ref="view" className="noticeview">
        <div ref="content">
          <h4>{title}</h4>
          <p dangerouslySetInnerHTML={{ __html: message }} />
        </div>
      </div>
    </li>
  )
}
