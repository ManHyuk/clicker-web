import React, { useState } from 'react';
import * as Styled from './style';

import coin from '../../static/coin.png';

const Coin = () => {
	const [isAppeared, setIsAppeared] = useState(true);

	setTimeout(() => setIsAppeared(false), 1000);

	return (
		<>
			{isAppeared && <Styled.Coin src={coin} />}
		</>
	)
}

export default Coin;