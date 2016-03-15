from django.shortcuts import render, get_object_or_404
from django.core.urlresolvers import reverse
from django.views import generic

from .models import Choice, Question


class IndexView(generic.ListView):
    template_name = 'introduction/index.html'

    def get_queryset(self):
            return 0



class AboutView(generic.ListView):
    template_name = 'introduction/about.html'

    def get_queryset(self):
        return 0


class TimelineView(generic.ListView):
    template_name = 'introduction/timeline.html'

    def get_queryset(self):
        return 0


class ExampleView(generic.ListView):
    template_name = 'introduction/example.html'

    def get_queryset(self):
        return 0