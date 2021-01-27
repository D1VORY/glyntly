from rest_framework_simplejwt.views import TokenObtainPairView 
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import IntegrityError
import json 

from .serializers import MyTokenObtainPairSerializer, CustomUserSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    """
    Later some fileds can be added to JWT key
    """
    serializer_class = MyTokenObtainPairSerializer


class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)

        if serializer.is_valid():
            try:
                user = serializer.save()
                if user:
                    refresh = RefreshToken.for_user(user)
                    tokens = {
                        'refresh': str(refresh),
                        'access': str(refresh.access_token)
                    }
                    return Response(tokens, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({'email': 'User with this email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)