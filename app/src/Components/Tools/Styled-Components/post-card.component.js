import React from 'react';
import styled from 'styled-components/native';

export const StoryCard = styled.View`
    background-color: ${ props => props.theme.colors.dark.bg.tertiary };
    margin: 8px 6px;
    border-radius: 4px;
`;

export const ImgStry = styled.Image`
    margin: 4px;
    height: ${ props => props.theme.sizes[5] };
`;

export const GridDisplay = styled.View`
    display: flex;
    flex-direction: row;
    padding: 12px;
`;

export const FlexDisplay = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-top-width: 1px;
    border-top-color: grey;
`;

export const RecCount = styled.Text`
    padding-top: ${ props => props.theme.space[5] };
    padding-left: -${ props => props.theme.space[5] };
    font-size: ${ props => props.theme.fontSizes.body };
`

export const LikeOption = styled.TouchableOpacity`
    padding: ${ props => props.theme.space[3] };
`;

export const SplitText = styled.Text`
    font-size: ${ props => props.theme.fontSizes.xlg };
    padding: ${ props => props.theme.space[3] };
    color: blue;
`;

export const Line = styled.View`
    border: 2px solid ${ props => props.theme.colors.dark.borders.secondary };
`;
