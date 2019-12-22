// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTmApplication = `subscription OnCreateTmApplication {
  onCreateTMApplication {
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
export const onUpdateTmApplication = `subscription OnUpdateTmApplication {
  onUpdateTMApplication {
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
export const onDeleteTmApplication = `subscription OnDeleteTmApplication {
  onDeleteTMApplication {
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
export const onCreateTmAppGroup = `subscription OnCreateTmAppGroup {
  onCreateTMAppGroup {
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
export const onUpdateTmAppGroup = `subscription OnUpdateTmAppGroup {
  onUpdateTMAppGroup {
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
export const onDeleteTmAppGroup = `subscription OnDeleteTmAppGroup {
  onDeleteTMAppGroup {
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
