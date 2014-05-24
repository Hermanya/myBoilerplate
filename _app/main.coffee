# to depend on a bower installed component:
# define(['bower_components/componentName/file'])

define(["jquery"], ($)->
  $('body').append('jQuery ' + $.fn.jquery + ' loaded!')
  alert "haha"
)
