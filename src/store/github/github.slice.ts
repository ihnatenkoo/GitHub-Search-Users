import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IFavUser, IRepos } from '../../types';
import { ActionTypes, IUserInitialState } from '../types';

const mockupUsers = [
	{
		login: 'ihnatenkoo',
		name: 'Dmytro Ihnatenko',
		avatar_url: 'https://avatars.githubusercontent.com/u/89586345?v=4',
		public_repos: 9,
		followers: 1,
		following: 0,
		html_url: 'https://github.com/ihnatenkoo',
	},
	{
		login: 'AndreyUA',
		name: null,
		avatar_url: 'https://avatars.githubusercontent.com/u/56089746?v=4',
		public_repos: 46,
		followers: 3,
		following: 1,
		html_url: 'https://github.com/AndreyUA',
	},
	{
		login: 'vercel',
		name: 'Vercel',
		avatar_url: 'https://avatars.githubusercontent.com/u/14985020?v=4',
		public_repos: 111,
		followers: 0,
		following: 0,
		html_url: 'https://github.com/vercel',
	},
	{
		login: 'jim',
		name: 'Jim Benton',
		avatar_url: 'https://avatars.githubusercontent.com/u/3331?v=4',
		public_repos: 55,
		followers: 121,
		following: 35,
		html_url: 'https://github.com/jim',
	},
	{
		login: 'serg',
		name: 'Sergey Furtak',
		avatar_url: 'https://avatars.githubusercontent.com/u/1274660?v=4',
		public_repos: 9,
		followers: 3,
		following: 0,
		html_url: 'https://github.com/serg',
	},
	{
		login: 'ged-odoo',
		name: 'Géry Debongnie',
		avatar_url: 'https://avatars.githubusercontent.com/u/7579538?v=4',
		public_repos: 12,
		followers: 166,
		following: 0,
		html_url: 'https://github.com/ged-odoo',
	},
	{
		login: 'IoPhoenix',
		name: 'Olga',
		avatar_url: 'https://avatars.githubusercontent.com/u/15132456?v=4',
		public_repos: 27,
		followers: 75,
		following: 3,
		html_url: 'https://github.com/IoPhoenix',
	},
	{
		login: 'heddle317',
		name: 'Kate',
		avatar_url: 'https://avatars.githubusercontent.com/u/525136?v=4',
		public_repos: 43,
		followers: 350,
		following: 0,
		html_url: 'https://github.com/heddle317',
	},
	{
		login: 'maxogden',
		name: 'Max Ogden',
		avatar_url: 'https://avatars.githubusercontent.com/u/39759?v=4',
		public_repos: 750,
		followers: 6489,
		following: 818,
		html_url: 'https://github.com/maxogden',
	},
	{
		login: 'FernandaOchoa',
		name: 'FernandaOchoa',
		avatar_url: 'https://avatars.githubusercontent.com/u/9124597?v=4',
		public_repos: 191,
		followers: 1702,
		following: 81,
		html_url: 'https://github.com/FernandaOchoa',
	},
];

const mockupRepos = [
	{
		id: 517104094,
		node_id: 'R_kgDOHtJh3g',
		name: 'GitHub-Search-Users',
		full_name: 'ihnatenkoo/GitHub-Search-Users',
		private: false,
		owner: {
			login: 'ihnatenkoo',
			id: 89586345,
			node_id: 'MDQ6VXNlcjg5NTg2MzQ1',
			avatar_url: 'https://avatars.githubusercontent.com/u/89586345?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/ihnatenkoo',
			html_url: 'https://github.com/ihnatenkoo',
			followers_url: 'https://api.github.com/users/ihnatenkoo/followers',
			following_url:
				'https://api.github.com/users/ihnatenkoo/following{/other_user}',
			gists_url: 'https://api.github.com/users/ihnatenkoo/gists{/gist_id}',
			starred_url:
				'https://api.github.com/users/ihnatenkoo/starred{/owner}{/repo}',
			subscriptions_url:
				'https://api.github.com/users/ihnatenkoo/subscriptions',
			organizations_url: 'https://api.github.com/users/ihnatenkoo/orgs',
			repos_url: 'https://api.github.com/users/ihnatenkoo/repos',
			events_url: 'https://api.github.com/users/ihnatenkoo/events{/privacy}',
			received_events_url:
				'https://api.github.com/users/ihnatenkoo/received_events',
			type: 'User',
			site_admin: false,
		},
		html_url: 'https://github.com/ihnatenkoo/GitHub-Search-Users',
		description: null,
		fork: false,
		url: 'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users',
		forks_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/forks',
		keys_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/keys{/key_id}',
		collaborators_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/collaborators{/collaborator}',
		teams_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/teams',
		hooks_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/hooks',
		issue_events_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/issues/events{/number}',
		events_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/events',
		assignees_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/assignees{/user}',
		branches_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/branches{/branch}',
		tags_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/tags',
		blobs_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/git/blobs{/sha}',
		git_tags_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/git/tags{/sha}',
		git_refs_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/git/refs{/sha}',
		trees_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/git/trees{/sha}',
		statuses_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/statuses/{sha}',
		languages_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/languages',
		stargazers_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/stargazers',
		contributors_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/contributors',
		subscribers_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/subscribers',
		subscription_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/subscription',
		commits_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/commits{/sha}',
		git_commits_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/git/commits{/sha}',
		comments_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/comments{/number}',
		issue_comment_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/issues/comments{/number}',
		contents_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/contents/{+path}',
		compare_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/compare/{base}...{head}',
		merges_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/merges',
		archive_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/{archive_format}{/ref}',
		downloads_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/downloads',
		issues_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/issues{/number}',
		pulls_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/pulls{/number}',
		milestones_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/milestones{/number}',
		notifications_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/notifications{?since,all,participating}',
		labels_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/labels{/name}',
		releases_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/releases{/id}',
		deployments_url:
			'https://api.github.com/repos/ihnatenkoo/GitHub-Search-Users/deployments',
		created_at: '2022-07-23T16:09:39Z',
		updated_at: '2022-07-31T05:40:59Z',
		pushed_at: '2022-07-30T18:09:47Z',
		git_url: 'git://github.com/ihnatenkoo/GitHub-Search-Users.git',
		ssh_url: 'git@github.com:ihnatenkoo/GitHub-Search-Users.git',
		clone_url: 'https://github.com/ihnatenkoo/GitHub-Search-Users.git',
		svn_url: 'https://github.com/ihnatenkoo/GitHub-Search-Users',
		homepage: null,
		size: 827,
		stargazers_count: 0,
		watchers_count: 0,
		language: 'TypeScript',
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [],
		visibility: 'public',
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: 'main',
	},
	{
		id: 492546279,
		node_id: 'R_kgDOHVuo5w',
		name: 'Spacelaunch',
		full_name: 'ihnatenkoo/Spacelaunch',
		private: false,
		owner: {
			login: 'ihnatenkoo',
			id: 89586345,
			node_id: 'MDQ6VXNlcjg5NTg2MzQ1',
			avatar_url: 'https://avatars.githubusercontent.com/u/89586345?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/ihnatenkoo',
			html_url: 'https://github.com/ihnatenkoo',
			followers_url: 'https://api.github.com/users/ihnatenkoo/followers',
			following_url:
				'https://api.github.com/users/ihnatenkoo/following{/other_user}',
			gists_url: 'https://api.github.com/users/ihnatenkoo/gists{/gist_id}',
			starred_url:
				'https://api.github.com/users/ihnatenkoo/starred{/owner}{/repo}',
			subscriptions_url:
				'https://api.github.com/users/ihnatenkoo/subscriptions',
			organizations_url: 'https://api.github.com/users/ihnatenkoo/orgs',
			repos_url: 'https://api.github.com/users/ihnatenkoo/repos',
			events_url: 'https://api.github.com/users/ihnatenkoo/events{/privacy}',
			received_events_url:
				'https://api.github.com/users/ihnatenkoo/received_events',
			type: 'User',
			site_admin: false,
		},
		html_url: 'https://github.com/ihnatenkoo/Spacelaunch',
		description: null,
		fork: false,
		url: 'https://api.github.com/repos/ihnatenkoo/Spacelaunch',
		forks_url: 'https://api.github.com/repos/ihnatenkoo/Spacelaunch/forks',
		keys_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/keys{/key_id}',
		collaborators_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/collaborators{/collaborator}',
		teams_url: 'https://api.github.com/repos/ihnatenkoo/Spacelaunch/teams',
		hooks_url: 'https://api.github.com/repos/ihnatenkoo/Spacelaunch/hooks',
		issue_events_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/issues/events{/number}',
		events_url: 'https://api.github.com/repos/ihnatenkoo/Spacelaunch/events',
		assignees_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/assignees{/user}',
		branches_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/branches{/branch}',
		tags_url: 'https://api.github.com/repos/ihnatenkoo/Spacelaunch/tags',
		blobs_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/git/blobs{/sha}',
		git_tags_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/git/tags{/sha}',
		git_refs_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/git/refs{/sha}',
		trees_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/git/trees{/sha}',
		statuses_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/statuses/{sha}',
		languages_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/languages',
		stargazers_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/stargazers',
		contributors_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/contributors',
		subscribers_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/subscribers',
		subscription_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/subscription',
		commits_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/commits{/sha}',
		git_commits_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/git/commits{/sha}',
		comments_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/comments{/number}',
		issue_comment_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/issues/comments{/number}',
		contents_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/contents/{+path}',
		compare_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/compare/{base}...{head}',
		merges_url: 'https://api.github.com/repos/ihnatenkoo/Spacelaunch/merges',
		archive_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/{archive_format}{/ref}',
		downloads_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/downloads',
		issues_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/issues{/number}',
		pulls_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/pulls{/number}',
		milestones_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/milestones{/number}',
		notifications_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/notifications{?since,all,participating}',
		labels_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/labels{/name}',
		releases_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/releases{/id}',
		deployments_url:
			'https://api.github.com/repos/ihnatenkoo/Spacelaunch/deployments',
		created_at: '2022-05-15T16:47:01Z',
		updated_at: '2022-07-31T05:41:01Z',
		pushed_at: '2022-06-21T12:28:45Z',
		git_url: 'git://github.com/ihnatenkoo/Spacelaunch.git',
		ssh_url: 'git@github.com:ihnatenkoo/Spacelaunch.git',
		clone_url: 'https://github.com/ihnatenkoo/Spacelaunch.git',
		svn_url: 'https://github.com/ihnatenkoo/Spacelaunch',
		homepage: null,
		size: 2557,
		stargazers_count: 0,
		watchers_count: 0,
		language: 'TypeScript',
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [],
		visibility: 'public',
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: 'main',
	},
	{
		id: 513204242,
		node_id: 'R_kgDOHpbgEg',
		name: 'Travel-App',
		full_name: 'ihnatenkoo/Travel-App',
		private: false,
		owner: {
			login: 'ihnatenkoo',
			id: 89586345,
			node_id: 'MDQ6VXNlcjg5NTg2MzQ1',
			avatar_url: 'https://avatars.githubusercontent.com/u/89586345?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/ihnatenkoo',
			html_url: 'https://github.com/ihnatenkoo',
			followers_url: 'https://api.github.com/users/ihnatenkoo/followers',
			following_url:
				'https://api.github.com/users/ihnatenkoo/following{/other_user}',
			gists_url: 'https://api.github.com/users/ihnatenkoo/gists{/gist_id}',
			starred_url:
				'https://api.github.com/users/ihnatenkoo/starred{/owner}{/repo}',
			subscriptions_url:
				'https://api.github.com/users/ihnatenkoo/subscriptions',
			organizations_url: 'https://api.github.com/users/ihnatenkoo/orgs',
			repos_url: 'https://api.github.com/users/ihnatenkoo/repos',
			events_url: 'https://api.github.com/users/ihnatenkoo/events{/privacy}',
			received_events_url:
				'https://api.github.com/users/ihnatenkoo/received_events',
			type: 'User',
			site_admin: false,
		},
		html_url: 'https://github.com/ihnatenkoo/Travel-App',
		description: null,
		fork: false,
		url: 'https://api.github.com/repos/ihnatenkoo/Travel-App',
		forks_url: 'https://api.github.com/repos/ihnatenkoo/Travel-App/forks',
		keys_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/keys{/key_id}',
		collaborators_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/collaborators{/collaborator}',
		teams_url: 'https://api.github.com/repos/ihnatenkoo/Travel-App/teams',
		hooks_url: 'https://api.github.com/repos/ihnatenkoo/Travel-App/hooks',
		issue_events_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/issues/events{/number}',
		events_url: 'https://api.github.com/repos/ihnatenkoo/Travel-App/events',
		assignees_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/assignees{/user}',
		branches_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/branches{/branch}',
		tags_url: 'https://api.github.com/repos/ihnatenkoo/Travel-App/tags',
		blobs_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/git/blobs{/sha}',
		git_tags_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/git/tags{/sha}',
		git_refs_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/git/refs{/sha}',
		trees_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/git/trees{/sha}',
		statuses_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/statuses/{sha}',
		languages_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/languages',
		stargazers_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/stargazers',
		contributors_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/contributors',
		subscribers_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/subscribers',
		subscription_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/subscription',
		commits_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/commits{/sha}',
		git_commits_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/git/commits{/sha}',
		comments_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/comments{/number}',
		issue_comment_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/issues/comments{/number}',
		contents_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/contents/{+path}',
		compare_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/compare/{base}...{head}',
		merges_url: 'https://api.github.com/repos/ihnatenkoo/Travel-App/merges',
		archive_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/{archive_format}{/ref}',
		downloads_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/downloads',
		issues_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/issues{/number}',
		pulls_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/pulls{/number}',
		milestones_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/milestones{/number}',
		notifications_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/notifications{?since,all,participating}',
		labels_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/labels{/name}',
		releases_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/releases{/id}',
		deployments_url:
			'https://api.github.com/repos/ihnatenkoo/Travel-App/deployments',
		created_at: '2022-07-12T15:53:30Z',
		updated_at: '2022-07-31T05:40:57Z',
		pushed_at: '2022-07-16T07:34:49Z',
		git_url: 'git://github.com/ihnatenkoo/Travel-App.git',
		ssh_url: 'git@github.com:ihnatenkoo/Travel-App.git',
		clone_url: 'https://github.com/ihnatenkoo/Travel-App.git',
		svn_url: 'https://github.com/ihnatenkoo/Travel-App',
		homepage: null,
		size: 6809,
		stargazers_count: 0,
		watchers_count: 0,
		language: 'TypeScript',
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [],
		visibility: 'public',
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: 'main',
	},
	{
		id: 505187860,
		node_id: 'R_kgDOHhyOFA',
		name: '5-task_buy_tickets',
		full_name: 'AndreyUA/5-task_buy_tickets',
		private: false,
		owner: {
			login: 'AndreyUA',
			id: 56089746,
			node_id: 'MDQ6VXNlcjU2MDg5NzQ2',
			avatar_url: 'https://avatars.githubusercontent.com/u/56089746?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/AndreyUA',
			html_url: 'https://github.com/AndreyUA',
			followers_url: 'https://api.github.com/users/AndreyUA/followers',
			following_url:
				'https://api.github.com/users/AndreyUA/following{/other_user}',
			gists_url: 'https://api.github.com/users/AndreyUA/gists{/gist_id}',
			starred_url:
				'https://api.github.com/users/AndreyUA/starred{/owner}{/repo}',
			subscriptions_url: 'https://api.github.com/users/AndreyUA/subscriptions',
			organizations_url: 'https://api.github.com/users/AndreyUA/orgs',
			repos_url: 'https://api.github.com/users/AndreyUA/repos',
			events_url: 'https://api.github.com/users/AndreyUA/events{/privacy}',
			received_events_url:
				'https://api.github.com/users/AndreyUA/received_events',
			type: 'User',
			site_admin: false,
		},
		html_url: 'https://github.com/AndreyUA/5-task_buy_tickets',
		description: 'Создание программы для покупки билетов в Golang',
		fork: false,
		url: 'https://api.github.com/repos/AndreyUA/5-task_buy_tickets',
		forks_url: 'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/forks',
		keys_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/keys{/key_id}',
		collaborators_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/collaborators{/collaborator}',
		teams_url: 'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/teams',
		hooks_url: 'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/hooks',
		issue_events_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/issues/events{/number}',
		events_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/events',
		assignees_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/assignees{/user}',
		branches_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/branches{/branch}',
		tags_url: 'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/tags',
		blobs_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/git/blobs{/sha}',
		git_tags_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/git/tags{/sha}',
		git_refs_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/git/refs{/sha}',
		trees_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/git/trees{/sha}',
		statuses_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/statuses/{sha}',
		languages_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/languages',
		stargazers_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/stargazers',
		contributors_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/contributors',
		subscribers_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/subscribers',
		subscription_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/subscription',
		commits_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/commits{/sha}',
		git_commits_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/git/commits{/sha}',
		comments_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/comments{/number}',
		issue_comment_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/issues/comments{/number}',
		contents_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/contents/{+path}',
		compare_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/compare/{base}...{head}',
		merges_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/merges',
		archive_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/{archive_format}{/ref}',
		downloads_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/downloads',
		issues_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/issues{/number}',
		pulls_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/pulls{/number}',
		milestones_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/milestones{/number}',
		notifications_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/notifications{?since,all,participating}',
		labels_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/labels{/name}',
		releases_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/releases{/id}',
		deployments_url:
			'https://api.github.com/repos/AndreyUA/5-task_buy_tickets/deployments',
		created_at: '2022-06-19T18:22:01Z',
		updated_at: '2022-06-19T18:23:08Z',
		pushed_at: '2022-06-19T18:23:05Z',
		git_url: 'git://github.com/AndreyUA/5-task_buy_tickets.git',
		ssh_url: 'git@github.com:AndreyUA/5-task_buy_tickets.git',
		clone_url: 'https://github.com/AndreyUA/5-task_buy_tickets.git',
		svn_url: 'https://github.com/AndreyUA/5-task_buy_tickets',
		homepage: null,
		size: 1038,
		stargazers_count: 0,
		watchers_count: 0,
		language: 'Go',
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [],
		visibility: 'public',
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: 'main',
	},
];

const initialState: IUserInitialState = {
	selectedUser: '',
	favorites: {
		repos: mockupRepos,
		users: mockupUsers,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		[ActionTypes.SET_SELECTED_USER]: (state, action: PayloadAction<string>) => {
			state.selectedUser = action.payload;
		},
		[ActionTypes.ADD_FAVORITE_USER]: (
			state,
			action: PayloadAction<IFavUser>
		) => {
			state.favorites.users.push(action.payload);
		},
		[ActionTypes.REMOVE_FAVORITE_USER]: (
			state,
			action: PayloadAction<string>
		) => {
			state.favorites.users = state.favorites.users.filter(
				(i: IFavUser) => i.login !== action.payload
			);
		},
		[ActionTypes.ADD_FAVORITE_REPO]: (state, action: PayloadAction<IRepos>) => {
			state.favorites.repos.push(action.payload);
		},
		[ActionTypes.REMOVE_FAVORITE_REPO]: (
			state,
			action: PayloadAction<number>
		) => {
			state.favorites.repos = state.favorites.repos.filter(
				(i) => i.id !== action.payload
			);
		},
	},
});

const { actions, reducer } = userSlice;

export default reducer;
export const {
	SET_SELECTED_USER,
	ADD_FAVORITE_REPO,
	REMOVE_FAVORITE_REPO,
	ADD_FAVORITE_USER,
	REMOVE_FAVORITE_USER,
} = actions;
