import { PostCard } from '~/components/shared/PostCard';
import { PostInput } from '~/components/shared/PostInput';

export const Feed = () => (
  <>
    <div className="flex flex-col px-4 lg:px-0">
      <PostInput rowsNumber={3} />
      <PostCard
        displayName={'Ruby Morris'}
        nickname={'rubymorris'}
        textContent={'dupa'}
        imgUrl={'https://source.unsplash.com/random/800x1600/?img=1'}
        altImg={'dupa'}
        liked={true}
      />
      <PostCard displayName={'Henry Matherne'} nickname={'imhenry'} textContent={'i love this app! 😍'} />
      <PostCard displayName={'Henry Matherne'} nickname={'imhenry'} textContent={'i love this app! 😍'} />
      <PostCard displayName={'Henry Matherne'} nickname={'imhenry'} textContent={'i love this app! 😍'} />
      <PostCard displayName={'Henry Matherne'} nickname={'imhenry'} textContent={'i love this app! 😍'} />
    </div>
  </>
);
