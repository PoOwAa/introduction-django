from django.conf.urls import url

from . import views

from .views import IndexView, TimelineView, AboutView, ExampleView

app_name = 'introduction'
urlpatterns = [
    # ex: /
    url('^$', IndexView.as_view(), name='indexUrl'),
    #/TimeLine/
    url(r'^TimeLine/', TimelineView.as_view(), name='timelineUrl'),
    #/About/
    url(r'^About/', AboutView.as_view(), name='aboutUrl'),
    #/Example/
    url(r'Example/', ExampleView.as_view(), name='exampleUrl'),
]