// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTmApplication = `query GetTmApplication($id: ID!) {
  getTMApplication(id: $id) {
    id
    name
    description
    target
    icon
    linkType
    requiresElevatedPrivledges
  }
}
`;
export const listTmApplications = `query ListTmApplications(
  $filter: ModelTMApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listTMApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      target
      icon
      linkType
      requiresElevatedPrivledges
    }
    nextToken
  }
}
`;
export const getTmAppGroup = `query GetTmAppGroup($id: ID!) {
  getTMAppGroup(id: $id) {
    id
    name
    application {
      id
      name
      description
      target
      icon
      linkType
      requiresElevatedPrivledges
    }
  }
}
`;
export const listTmAppGroups = `query ListTmAppGroups(
  $filter: ModelTMAppGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listTMAppGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      application {
        id
        name
        description
        target
        icon
        linkType
        requiresElevatedPrivledges
      }
    }
    nextToken
  }
}
`;
