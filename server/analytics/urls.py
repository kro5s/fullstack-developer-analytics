from django.urls import path
from .views import Common, Relevance, Geography, Skills

urlpatterns = [
    path('common/', Common.as_view(), name='common'),
    path('relevance/', Relevance.as_view(), name='relevance'),
    path('geography/', Geography.as_view(), name='geography'),
    path('skills/', Skills.as_view(), name='skills'),
    # path('latest/', ),
]