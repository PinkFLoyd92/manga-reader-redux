import { merge } from 'lodash';
import { resolvers as mangaResolvers } from './manga';
import { resolvers as authResolvers } from './user';
const rootResolvers = { };
// Merge all of the resolver objects together
const resolvers = merge(rootResolvers, mangaResolvers, authResolvers);

export default resolvers;
