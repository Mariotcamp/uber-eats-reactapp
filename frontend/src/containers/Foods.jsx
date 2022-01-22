import React, { Fragment } from 'react';

export const Foods = ({
  match
}) => {
  return (
    <Fragment>
      フード一覧
      <p>
        {/* コンポーネント内でid取れないのはやばいからmatchで今回はしっかり渡した感じか */}
      restaurantsIdは {match.params.restaurantsId} です
      </p>
    </Fragment>
  )
}
