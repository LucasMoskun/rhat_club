import {ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client"

export const TestRhatQuery = async () => {

    const client = new ApolloClient({
        uri: 'https://hub.snapshot.page/graphql',
        cache: new InMemoryCache()
    });

    client
        .query({
            query: gql`
            query {
                space(id: "rbn.eth") {
                  id
                  name
                  about
                  network
                  symbol
                  members
                }
              }
        `
    })
    .then(result => console.log("Snapshot Query: ",result));
}