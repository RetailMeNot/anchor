/**
 * This component is used at the top of the card.mdx file to immediately show an example of what
 * a card looks like. This same example is given again at the bottom of the page but with the
 * live code editor.
 */

import * as React from 'react';
import { Card, Typography } from '@retailmenot/anchor';
import { BottomArea, MoreInfo } from './index';

export const CardExample = () => (
    <Card actionArea={<BottomArea />} action={<MoreInfo />} gutter="medium">
        <Typography as="h3" mt="1">
            I am the content of the card.
        </Typography>

        <Typography as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            semper leo sit amet nibh ornare, sed condimentum libero rutrum.
        </Typography>
    </Card>
);
