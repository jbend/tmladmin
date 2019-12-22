// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTmApplication = `mutation CreateTmApplication(
  $input: CreateTMApplicationInput!
  $condition: ModelTMApplicationConditionInput
) {
  createTMApplication(input: $input, condition: $condition) {
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
export const updateTmApplication = `mutation UpdateTmApplication(
  $input: UpdateTMApplicationInput!
  $condition: ModelTMApplicationConditionInput
) {
  updateTMApplication(input: $input, condition: $condition) {
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
export const deleteTmApplication = `mutation DeleteTmApplication(
  $input: DeleteTMApplicationInput!
  $condition: ModelTMApplicationConditionInput
) {
  deleteTMApplication(input: $input, condition: $condition) {
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
export const createTmAppGroup = `mutation CreateTmAppGroup(
  $input: CreateTMAppGroupInput!
  $condition: ModelTMAppGroupConditionInput
) {
  createTMAppGroup(input: $input, condition: $condition) {
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
export const updateTmAppGroup = `mutation UpdateTmAppGroup(
  $input: UpdateTMAppGroupInput!
  $condition: ModelTMAppGroupConditionInput
) {
  updateTMAppGroup(input: $input, condition: $condition) {
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
export const deleteTmAppGroup = `mutation DeleteTmAppGroup(
  $input: DeleteTMAppGroupInput!
  $condition: ModelTMAppGroupConditionInput
) {
  deleteTMAppGroup(input: $input, condition: $condition) {
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
