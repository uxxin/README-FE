import React from 'react';
import { NoticeItem } from '../../../components/Notice/NoticeItem';

const Preview = () => {
  const isManager = true;
  const post = [
    {
      postId: 1,
      postType: 'Quiz',
      postTitle: 'TEST',
      postBody: 'TESTCONTENT',
      startDate: '24. 7. 25. 04:24',
      endDate: '24. 7. 25. 05:24',
    },
  ];
  const imageURLs = ['url11.com', 'url12.com'];

  return (
    <div>
      {post.length > 0 ? (
        post.map((data) => (
          <NoticeItem
            props={data}
            key={data.postId}
            imgs={imageURLs}
            preview={true}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Preview;
