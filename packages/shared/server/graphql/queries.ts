import { gql } from "@apollo/client";

export const GET_DASHBOARD = gql`
  query Query {
    getDashboard {
      id
      userId
      createdAt
      image
      email
      name
      slug
      url
      description
      issues {
        id
        state
      }
    }
  }
`;
export const GET_PROJECT = gql`
  query Query($slug: String!) {
    getProject(slug: $slug) {
      id
      userId
      createdAt
      image
      email
      name
      slug
      url
      description
      issues {
        id
        createdAt
        userId
        title
        slug
        description
        state
        votes
        severity
        comments {
          id
        }
      }
      user {
        username
      }
    }
  }
`;

export const GET_ISSUE = gql`
  query Query($slug: String!) {
    getIssue(slug: $slug) {
      id
      createdAt
      updatedAt
      project {
        id
        slug
      }
      title
      slug
      description
      state
      votes
      severity
      comments {
        id
        createdAt
        issueId
        content
        user {
          username
          image
          id
        }
      }
      user {
        username
        image
      }
      userId
    }
  }
`;
export const GET_PROJECT_PATHS = gql`
  query {
    getAllProjects {
      slug
    }
  }
`;

export const GET_ISSUE_PATHS = gql`
  query {
    getAllProjects {
      slug
      issues {
        slug
      }
    }
  }
`;

export const CREATE_ISSUE = gql`
  mutation createIssue(
    $projectId: String!
    $projectSlug: String!
    $description: String!
    $title: String!
    $severity: String!
  ) {
    createIssue(
      projectId: $projectId
      projectSlug: $projectSlug
      title: $title
      description: $description
      severity: $severity
    ) {
      title
    }
  }
`;
export const CREATE_PROJECT = gql`
  mutation Mutation(
    $name: String!
    $url: String!
    $email: String!
    $description: String!
  ) {
    createProject(
      name: $name
      url: $url
      email: $email
      description: $description
    ) {
      id
    }
  }
`;
export const SIGN_UP = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      id
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
    }
  }
`;

export const GET_ME = gql`
  query {
    getMe {
      id
      createdAt
      username
      email
      image
    }
  }
`;

export const LOG_OUT = gql`
  mutation Mutation {
    logOut {
      id
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($issueId: String!, $content: String!) {
    createComment(issueId: $issueId, content: $content) {
      content
      createdAt
      id
      user {
        username
        id
        image
      }
    }
  }
`;

export const UPDATE_VOTE = gql`
  mutation Mutation($issueId: String!) {
    updateVote(issueId: $issueId) {
      id
      votes
    }
  }
`;