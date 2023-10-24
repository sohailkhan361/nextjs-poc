import request, { gql } from "graphql-request";

const url = 'https://api-ap-south-1.hygraph.com/v2/clo44rdh95zp301ukedeobqgp/master';

export const getItemsList = async () => {
    const query = gql`
        query ItemsLists {
            itemsLists {
            createdAt
            id
            name
            price
            publishedAt
            rank
            updatedAt
            }
        }`;

    const result = await request(url, query);
    return result;
};