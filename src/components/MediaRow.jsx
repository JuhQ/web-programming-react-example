const MediaRow = ({media}) => {
  return (
    <tr>
      <td>
        <img src={media.thumbnail} alt={media.description} />
      </td>
      <td>{media.title}</td>
      <td>{media.created_at}</td>
      <td>{media.filesize}</td>
      <td>{media.media_type}</td>
    </tr>
  );
};

export default MediaRow;
