import request, { gql } from "graphql-request";

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clo44rdh95zp301ukedeobqgp/master';

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
                image {
                    url
                }
                publisher
                itemType
            }
        }`;

    const result = await request(MASTER_URL, query);
    return result;
};

export const getUserLocations = async () => {
    const query = gql`
        query userLocation {
            userLocations {
            address
            }
        }`;

    const result = await request(MASTER_URL, query);
    return result;
};