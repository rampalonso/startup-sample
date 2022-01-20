export const GetEventsBlock = `
query GetEventsBlock {
  sectionCollection {
    items {
      title
      slug
      description
      cta
    }
  }
  eventCollection {
    items {
      title
      slug
      description
      date
      done
      expositorsCollection {
        items {
          name
        }
      }
    }
  }
}
`;

export const GetPageElements = `
query GetPageElements {
    pageElements(id: "3HkfolLawV6kwBCvt8i0Rv") {
      logo {
        url
      },
      logoMini {
        url
      }
      menu
    }
  }
`;

export const GetEvents = `
  query GetEvents {
    eventCollection {
      items {
        title
        slug
        description
        date
        done
        expositorsCollection {
          items {
            name
          }
        }
      }
    }
  }
`;

export const GetEventBySlug = `
  query GetEventBySlug($slug: String!) {
    eventCollection(where: { slug: $slug }) {
      items {
        title
        slug
        description
        date
        done
        expositorsCollection {
          items {
            name
          }
        }
      }
    }
  }
`;