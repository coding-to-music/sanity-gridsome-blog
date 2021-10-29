export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617b9a170e5bd293d6cb62eb',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-pcx3tz9r',
                  apiId: 'f01ce93d-1fbb-4b32-9690-30f49c725a36'
                },
                {
                  buildHookId: '617b9a1718edaa8a03f0dad6',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-gsiyhrc1',
                  apiId: 'd62c7704-a0da-489b-9705-0883c04e358e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coding-to-music/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-gsiyhrc1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
