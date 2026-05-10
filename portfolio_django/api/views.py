from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from .models import Project, ContactMessage
from .serializers import ProjectListSerializer, ProjectDetailSerializer, ContactMessageSerializer


class ContactRateThrottle(AnonRateThrottle):
    rate = '2/minute'


class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.filter(is_published=True)
    serializer_class = ProjectListSerializer


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.filter(is_published=True)
    serializer_class = ProjectDetailSerializer
    lookup_field = 'slug'


class ContactMessageCreateView(generics.CreateAPIView):
    serializer_class = ContactMessageSerializer
    throttle_classes = [ContactRateThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'Wiadomość wysłana pomyślnie!'}, status=status.HTTP_201_CREATED)
