import './Home.css';

import MediaRow from './MediaRow';
import {useMedia} from '../hooks/ApiHooks';

const Home = () => {
  const {mediaArray} = useMedia();

  return (
    <>
      <h2>My media</h2>

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((media) => (
            <MediaRow key={media.media_id} media={media} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
